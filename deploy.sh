#!/usr/bin/env bash

DOCKER_REPOSITORY=registry.sitery.io
BUILD_TAG="branch."$(git branch | grep "*" | cut -d' ' -f2)

ENV=$(echo "$1" | awk -F. '{print toupper(substr($2,1,1)) tolower(substr($2,2))}')

if [[ -z "$1" ]]; then
    echo "Need ENV"
    exit 1
fi

docker_tag ()
{
    repository=$1;
    tag=${2:-$DOCKER_PRIMARY_TAG};
    echo "$DOCKER_REPOSITORY/bhhaskin/$repository:$tag"
}

IMAGE_BASE=$(docker_tag suddenly-frontend $BUILD_TAG)
ENV_BASE=$(docker_tag suddenly-frontend $1)

sudo docker build  -t $IMAGE_BASE -t $ENV_BASE .
sudo docker push $IMAGE_BASE
sudo docker push $ENV_BASE

ssh bhhaskin@docker-1.sitery.io -t <<EOL
	cd "/home/bhhaskin/code/$1-suddenly-frontend"
    docker-compose down
    docker-compose pull
    docker-compose up -d
EOL
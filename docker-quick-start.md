## How to create Docker Images with a Dockerfile

https://www.howtoforge.com/tutorial/how-to-create-docker-images-with-dockerfile/

## Docker to Singularity

```
git clone https://github.com/WireCell/wire-cell-containers.git
docker build -t hello wire-cell-containers/docker/debian/
docker images
```

```
docker login --username=yuhw
docker images
docker tag b47edf827dcb yuhw/hello:firsttry
docker push yuhw/hello
```

Visity https://hub.docker.com/ to check

```
singularity pull docker://yuhw/sl7:cuda10.1
singularity run sl7_cuda10.1.sif
```

```
docker run \
-it \
--rm \
-v /home/yuhw/Downloads/:/Downloads \
yuhw/sl7:firsttry
```

```
docker exec -it 05625508b0d4 bash
docker commit -m "cuda toolkit 10.1" aaaae38c850a yuhw/sl7:cuda10.1
docker image push yuhw/sl7
docker rm $(docker ps -a -q) #rm all stopped containers
```

## Pushing and Pulling to and from Docker Hub

https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html



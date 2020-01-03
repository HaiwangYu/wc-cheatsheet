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
singularity pull docker://yuhw/hello:firsttry
singularity run hello_firsttry.sif
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
```

## Pushing and Pulling to and from Docker Hub

https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html



## How to create Docker Images with a Dockerfile

https://www.howtoforge.com/tutorial/how-to-create-docker-images-with-dockerfile/

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





## Using conda to prepare

https://github.com/pytorch/pytorch#from-source

## Set enviroment viriables

```
export CC=/cvmfs/dune.opensciencegrid.org/products/dune/gcc/v7_3_0/Linux64bit+3.10-2.17/bin/gcc
```

## Build

https://github.com/pytorch/pytorch/blob/master/docs/libtorch.rst

```
cd <pytorch_root>

# Make a new folder to build in to avoid polluting the source directories
mkdir build_libtorch && cd build_libtorch

# You might need to export some required environment variables here.
Normally setup.py sets good default env variables, but you'll have to do
that manually.
python ../tools/build_libtorch.py
```

Takes about 1 hour. Building `.cu` in Coffe2 is really slow

## Also refer to a post:
https://discuss.pytorch.org/t/glibc-linker-errors-when-linking-against-libtorch-on-ubuntu-18-04/55183/11

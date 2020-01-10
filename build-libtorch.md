
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

Takes about 1 hour. Compiling `.cu` in Coffe2 is really slow

## References:
 - [GCC5 and the C++11 ABI](https://developers.redhat.com/blog/2015/02/05/gcc5-and-the-c11-abi/)
 - [linker error in building a minimal C++ application](https://github.com/pytorch/pytorch/issues/27834)
 - [GLIBC linker errors when linking against libtorch on Ubuntu 18.04](https://discuss.pytorch.org/t/glibc-linker-errors-when-linking-against-libtorch-on-ubuntu-18-04/55183/11)
 - [pytorch releases](https://github.com/pytorch/pytorch/releases)
 - [libtorch-ssi-build](https://cdcvs.fnal.gov/redmine/projects/build-framework/repository/libtorch-ssi-build)
 - [undefined symbol: _ZN3c1014DeviceTypeNameB5cxx11ENS_10DeviceTypeEb](https://github.com/NVIDIA-AI-IOT/torch2trt/issues/217)
 - [Install TensorFlow for C](https://www.tensorflow.org/install/lang_c)

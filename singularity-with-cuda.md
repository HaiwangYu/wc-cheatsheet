## Singularity GPU support

https://sylabs.io/guides/3.5/user-guide/gpu.html

```
singularity exec --nv
```

## How do the nv option and nvidia/cuda* containers interact?

https://github.com/sylabs/singularity/issues/2421

## libnvidia-container

https://github.com/NVIDIA/libnvidia-container

```
/usr/lib/x86_64-linux-gnu/
```

## cuda toolkit
```
--bind /usr/local/cuda/:/usr/local/cuda/
```

## cuDNN
http://www.askaswiss.com/2019/01/how-to-install-cuda-9-cudnn-7-ubuntu-18-04.html

https://developer.nvidia.com/compute/machine-learning/cudnn/secure/7.6.5.32/Production/10.1_20191031/cudnn-10.1-linux-x64-v7.6.5.32.tgz
https://developer.nvidia.com/compute/machine-learning/cudnn/secure/v7.6.2.24/prod/10.1_20190719/cudnn-10.1-linux-x64-v7.6.2.24.tgz

## LibTorch

1.3.0 compatible with glibc 2.17

https://download.pytorch.org/libtorch/cu101/libtorch-cxx11-abi-shared-with-deps-1.3.0.zip

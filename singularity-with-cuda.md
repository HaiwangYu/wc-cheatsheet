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

## LibTorch

1.3.0 compatible with glibc 2.17
https://download.pytorch.org/libtorch/cu101/libtorch-cxx11-abi-shared-with-deps-1.3.0.zip

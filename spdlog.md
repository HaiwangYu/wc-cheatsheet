# Install spdlog

## get code and install
**from https://brettviren.github.io/zio/install.html #5.1**

```bash
git clone https://github.com/gabime/spdlog.git
mkdir spdlog/build && cd spdlog/build
cmake .. \
 -DCMAKE_INSTALL_PREFIX=$HOME/sl7/spdlog \
 -DCMAKE_POSITION_INDEPENDENT_CODE=ON
make -j
make install
```


## add pkgconfig of spdlog to search path

```bash
export PKG_CONFIG_PATH=$HOME/sl7/spdlog/lib64/pkgconfig:$PKG_CONFIG_PATH
```

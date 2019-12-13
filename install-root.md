On my Ubuntu 18

```bash
sudo apt-get install libxpm-dev
sudo apt-get install libxft-dev
```

```bash
cmake ../root-6.18.04-source/ -DCMAKE_INSTALL_PREFIX=/home/yuhw/sw/root-6.18.04-install
cmake --build . --target install -- j 8
```

# ssi build shim

## repository
https://github.com/BNLIF/wcp-ssi-build

### step 1 source code
```bash
time ./bootstrap.sh /dune/app/users/yuhw/products/
```
time:
```bash
real	1m6.110s
user	0m22.353s
sys	0m3.491s
```
tree
```
products
├── ssibuildshims
│   ├── v1_04_13
│   │   ├── bin
│   │   │   ├── declare_product
│   │   │   ├── define_basics
│   │   │   ├── download_file
│   │   │   ├── fake_declare_product
│   │   │   ├── fix_macos_lib_symbols
│   │   │   ├── get_os_platform
│   │   │   ├── get_product_dir
│   │   │   ├── get_ups_setup_dir
│   │   │   ├── latest_version
│   │   │   ├── make_distribution_tarball
│   │   │   ├── make_source_code_base
│   │   │   ├── make_source_code_distribution
│   │   │   ├── make_source_code_tarball
│   │   │   ├── ncores
│   │   │   ├── process_qualifiers
│   │   │   ├── setup_cmake
│   │   │   ├── setup_python
│   │   │   └── ssi_functions
│   │   ├── templates
│   │   │   └── bootstrap.sh.template
│   │   └── ups
│   │       └── ssibuildshims.table
│   └── v1_04_13.version
│       └── NULL_
├── ssibuildshims-1.04.13-noarch.tar.bz2
├── wcp
│   └── v00_12_00
│       ├── autobuild.sh
│       ├── build_wcp.sh
│       ├── tar
│       │   └── wcp-v00_12_00.tar.bz2
│       └── ups
│           └── wcp.table
└── wcp-00.12.00-source.tar.bz2
```
### step 2 build
```bash
time ./build_wcp.sh /dune/app/users/yuhw/products e17 prof
```

retuls:
```bash
Finished building wcp v00_12_00
wcp is installed at wcp/v00_12_00/Linux64bit+2.6-2.12-e17-prof

real	6m30.515s
user	0m6.954s
sys	0m3.230s
```
tree:
```bash
wcp
├── v00_12_00
│   ├── Linux64bit+2.6-2.12-e17-prof
│   │   ├── bin
│   │   ├── include
│   │   ├── lib
│   │   ├── lib64
│   │   └── wcp-v00_12_00
│   ├── autobuild.sh
│   ├── build_wcp.sh
│   ├── fakedb
│   │   └── wcp
│   ├── tar
│   │   └── wcp-v00_12_00.tar.bz2
│   └── ups
│       └── wcp.table
└── v00_12_00.version
```

mrb test build
```bash
mrb newDev -v v08_34_00 -q e17:prof
source localProducts_larsoft_v08_34_00_e17_prof/setup
cd $MRB_SOURCE
mrb g uboone_suite
```



# other method
## Brett's macro
https://github.com/brettviren/waftools/blob/master/create-ups-product.sh

## cmd

```bash
./waf-tools/create-ups-product.sh ../products/ v00_10_00 e17:prof root boost
```

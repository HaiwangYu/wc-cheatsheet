# git

## git submodule

https://codeyarns.com/2016/02/10/how-to-work-with-git-submodules/

```bash
git clone git@github.com:jpe/some_repo.git
git submodule update --init --recursive
```


## checkout pull request locally
```bash
git fetch origin refs/pull/75/head
git checkout -b brettviren/issue54 FETCH_HEAD
```

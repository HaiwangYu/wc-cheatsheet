


```bash
jsonnet -J cfg wct-track-eval/track-eval.jsonnet -o track-eval.json && wire-cell -l stdout:info -c track-eval.json
```

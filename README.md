iGeorgia
---
Digital One Stop Place For Georgia Tourism

## Backend

### Docker

```
$ docker-compose up -d
```

### Environment

To override default values create `.env` file with keys from `.env.example`

### Data

Data lives outside of Docker in `./data` folder. Delete it or
any of its sub-folders. It'll be re-created on next Docker run.


### DB Setup
```
$ brew install cypher-shell
$ export $(cat .env | sed 's/#.*//g' | xargs)
$ cat ./schema/ig-graph.cypher | cypher-shell
```

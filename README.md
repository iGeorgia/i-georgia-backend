iGeorgia
---
Digital One Stop Place For Georgia Tourism

## Backend

### Neo4J

#### Data

Data lives outside of Docker in `./data` folder. Delete it or
any of its sub-folders. It'll be re-created on next Docker run.

#### Download GraphQL Plugin

```
$ ./scripts/neo4j_graphql_plugin.sh
```

#### Environment

To override default values create `.env` file with keys from `.env.example`

#### Run

```
$ docker-compose up -d
```

#### DB Setup
```
$ brew install cypher-shell
$ export $(cat .env | sed 's/#.*//g' | xargs)
$ cat ./schema/ig-graph.cypher | cypher-shell
```

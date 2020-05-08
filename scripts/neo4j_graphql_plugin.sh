#!/usr/bin/env bash

plugin_folder="./data/neo4j/plugins"

CURL=$(which curl)

if [[ ! -a ${CURL} ]]; then
  echo "Need curl executable"
fi

JQ=$(which jq)

if [[ ! -a ${JQ} ]]; then
  echo "Need jq executable"
fi

echo -n "Checking latest Neo4J GraphQL plugin... "
json=$(${CURL} -s https://api.github.com/repos/neo4j-graphql/neo4j-graphql/releases/latest)
url=$(echo ${json} | ${JQ} -r ".assets[] | .browser_download_url")
version=$(echo ${json} | ${JQ} -r ".tag_name")
echo "version: ${version}"

if [[ ! -a ${plugin_folder} ]]; then
  echo -n "Creating Neo4J plugins folder... "
  mkdir -p ${plugin_folder}
  echo ${plugin_folder}
fi

echo -n "Downloading plugin... "
(
  cd ${plugin_folder};
  rm -f neo4j-graphql*.jar;
  ${CURL} -O ${url} 2> /dev/null;
  echo "$(ls -1 neo4j-graphql*.jar)"
)
cat <<EOF

Run \`docker-compose up [-d]\` to start Neo4J server.
Check out README.md for initial setup instructions.
EOF

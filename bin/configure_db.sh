#!/bin/bash


echo "Configuring dragonstackdb"

dropdb -U node_users dragonstackdb
createdb -U node_users dragonstackdb

psql -U node_users dragonstackdb < ./bin/sql/generation.sql
psql -U node_users dragonstackdb < ./bin/sql/dragon.sql

echo "Dragonstackdb configured"
FROM mongo

COPY paises.csv /paises.csv

CMD mongo database/citartech --eval 'db.pais.drop()' && \
    mongoimport --host database -d citartech -c pais --type csv --file paises.csv --headerline

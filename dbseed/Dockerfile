FROM mongo

COPY paises.csv /paises.csv
CMD mongoimport --host database -d citartech -c pais --type csv --file paises.csv --headerline

FROM mongo

COPY paises.csv /paises.csv

# Forçando espera do mongodb
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && \
    mongo database/citartech --eval 'db.pais.drop()' && \
    mongoimport --host database -d citartech -c pais --type csv --file paises.csv --headerline

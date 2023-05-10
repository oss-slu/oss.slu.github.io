---
id:database_web_app_guide
title: Style Guide for 
custom_edit_url: https://github.com/oss-slu/dads/tree/main
---

# Style Guide for database web applications (Similar to Dads project)

We used Flask (python) for the backend, largely due to a request from the client as it was the language he was most familair with, and React for the front end, though
realistically, pretty much any combination of front end and back end could work and is open to each team's interpretation. 

The main take away for this project/type of project, in my opinion, is working with the database itself, or standing up a test database to use while waiting 
for a final database to be created/accessible. 

General instructions are below for standing up a PostGRE SQL database in Docker and populating it from a .csv file with data persistance so it only has to be populated once

Firt you will need to make a Dockerfile, which will be a file named Dockerfile with no set file extension. An example Dockerfile can be found below

FROM postgres
ENV POSTGRES_PASSWORD DB_PASSWORD
ENV POSTGRES_DB DB_NAME
COPY *.sql /docker-entrypoint-initdb.d/
ADD setup.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*
EXPOSE 6666

The first line will get the most recent postgres Docker image available, the next two lines will setup environment variables, the 4th-6th lines will move a file
and make it executable (specifically the setup.sql file talked about in the next section), and the final line will expose port 6666. 
I believe this should be fairly reusuable. The POSTGRES_DB and POSTGRES_PASSWORD variables can be changed to essentially any vale

You will also need a setup.sql file in the same directory as the Dockerfile, and this file should have the table schema you plan to use.

After both of these files are created you are ready to follow the next steps.

First, install DockerDestop ((https://docs.docker.com/desktop/install/windows-install/)

Open CMD as admin, navigate to the folder with Dockerfile

Run "docker build -t NAME_OF_IMAGE ./" 
    NAME_OF_IMAGE can be pretty much anything, it is just the name you want to use

Run "docker run --name NAME_OF_CONTAINER -v SOME_FILE_PATH/pgdata:/var/lib/postgresql/data -p 5432:5432 NAME_OF_IMAGE"
    This is the same NAME_OF_IMAGE from the previous step, and NAME_OF_CONTAINER is the same deal, ahtever name you want to use
     SOME_FILE_PATH is any file path you choose, just make sure to include the final /pgdata:

Navigate to the File path provided in the previous step, then into the new pgdata folder

Paste your csv file with data into this folder

In a new cmd window run "docker exec -it NAME_OF_CONTAINER psql -U postgres -d DB_NAME
    The DB_NAME will be the value set in the Dockerfile

This should give a shell within the docker container

In this shell, run "\copy data FROM '/var/lib/postgresql/data/data.csv' DELIMITER ',' CSV HEADER;"
    This final command should populate your database and each time you access it in the future you should be able to simply use 
    docker start NAME_OF_CONTAINER
    in a cmd
    
    
This should get the database setup and populated. Now you should be able to connect using this info style
Host: localhost
Port: 5432
User: postgres
Password: DB_PASSWORD
Database Name: DB_Name
Table Name: public.TABLE_NAME


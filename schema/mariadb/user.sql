create table if not exists user (
    id number not null primary key,
    email varchar(1024) not null unique,
    first varchar(1024) not null,
    middle varchar(1024) not null default '',
    last varchar(1024) not null
);

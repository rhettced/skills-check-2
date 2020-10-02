update shelfie
set name = $2
where id = $1;

update shelfie
set price = $3
where id = $1;

update shelfie
set img = $4
where id = $1;

select * from shelfie;
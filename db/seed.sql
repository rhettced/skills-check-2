create table shelfie (
    id serial primary key,
    name varchar(25),
    price integer,
    img text
);

insert into shelfie
(name, price, img)
values
('Basketball Hoop',200,'https://dks.scene7.com/is/image/dkscdn/16LIFULT52PRTBLSYBKE_is/?$DSG_ProductCard$'),
('Baseball Glove',20,'https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/c/5/c50da11c29f9c38f1e70298d266d38655d6e1508_WTA20RB191786_A2000_Leather_IF_115_Blonde_DarkBrown_Double.jpg');


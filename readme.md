# User model
```
1.Yaratish - [ name, surname, birthday, countryID, regionID, phone ]
2.Avtorizatsiya (sessiya + token) - [phone]
3.Alohida id boyicha olish
4.Hammasini olish
5.O'chirish
6.Tahrirlash [ name, surname, birthday, phone, email]
```
# Country model
```
1.Yaratish - [ name ]
2.Alohida id boyicha olish
3.Hammasini olish
4.Tahrirlash [ name ]
5.O'chirish
```
# Region model
```
1.Yaratish - [ name ]
2.Alohida id boyicha olish
3.Hammasini olish
4.Tahrirlash [ name ]
5.O'chirish
6.Yagona countryID boyicha hamma regionlarni olish
```
# Category model
```
1.Yaratish - [ countryID, regionID, name, image ]
2.Alohida id boyicha olish
3.Hammasini olish
4.Tahrirlash [ countryID, regionID, name ]
5.Tahrirlash [ image ]
5.O'chirish [ axlatti tashab ketma 👀]
6.Yagona countryID boyicha hamma CATEGORY larni olish
7.Yagona regionID boyicha hamma CATEGORY larni olish
```
# Subcategory model
```
1.Yaratish - [ categoryID, name, image ]
2.Alohida id boyicha olish
3.Hammasini olish
4.Tahrirlash [ categoryID, name ]
5.Tahrirlash [ image ]
5.O'chirish [ axlatti tashab ketma 👀]
6.Yagona categoryID boyicha hamma SUBCATEGORY larni olish
```
# Saved model
```
1.Yaratish - [ userID, productID ]
2.Alohida id boyicha olish -  SAVED.findById({_id: req.params.id})
3.O'chirish [ axlatti tashab ketma 👀]
4.Yagona userID boyicha hamma SAVED larni olish   -  SAVED.find({ userID: req.params.id})
```
# Product model
```
Yaratish - [ hammasi]
Alohida id boyicha olish 
Tahrirlash [actual, name, description, price ]
Tahrirlash [status]
Tahrirlash [price]
O'chirish [ axlatti tashab ketma 👀]
Yagona subcategoryID boyicha hamma PRODUCT larni olish   -  PRODUCT.find({ subcategoryID: req.params.id})
Yagona countryID boyicha hamma PRODUCT larni olish   -  PRODUCT.find({ countryID: req.params.id})
Yagona regionID boyicha hamma PRODUCT larni olish   -  PRODUCT.find({ regionID: req.params.id})
Active yoki No_active boyicha hamma PRODUCT larni olish   -  PRODUCT.find({ regionID: req.params.id})
```
# Basket model
```
Yaratish - [ hammasi]
Alohida id boyicha olish 
O'chirish [ axlatti tashab ketma 👀]
Yagona userID boyicha hamma BASKET larni olish   -  BASKET.find({ userID: req.params.id})
Yagona productID boyicha hamma BASKET larni olish   -  BASKET.find({ productID: req.params.id})
```
# Order model
```
Yaratish - [ hammasi]
Alohida id boyicha olish 
O'chirish
Yagona userID boyicha hamma BASKET larni olish   -  ORDER.find({ userID: req.params.id})
Yagona productID boyicha hamma BASKET larni olish   -  ORDER.find({ productID: req.params.id})
Yagona payment boyicha hamma BASKET larni olish   -  ORDER.find({ payment: req.params.id})
```
# B2B model
```
Yaratish - [ hammasi]
Alohida id boyicha olish 
O'chirish
```
# Vacancy_position model
```
Yaratish - [ hammasi ]
Alohida id boyicha olish 
O'chirish
Hammasini olish [active / no_active]            Vacancy_position.find({ status: "active" })
Tahrirlash [ hammsi ]
```
# Vacansy model
```
Yaratish - [ hammasi ]
Alohida id boyicha olish 
O'chirish
Hammasini olish [ access / cancel]                     -    Vacancy_position.find({ status: "cancel" })
Yagona vacancyID boyicha hamma VAKANSIYA larni olish   -    VACANCY.find({ vacancyID: req.params.id})
Yagona userID boyicha hamma VAKANSIYA larni olish      -    VACANCY.find({ userID: req.params.id})
```

# Advertisement model
```
Yaratish - [ hammasi]
Alohida id boyicha olish 
O'chirish [ axlatti tashab ketma 👀]
```
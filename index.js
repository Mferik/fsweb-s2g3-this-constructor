// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
    - Bir Kisi Constructor'ı yazın 'isim ve 'yas' argümanları alsın.
    - Tüm Kisi örnekleri boş bir `mide` dizisi ile yüklensin.
    - Kisi örneklerine `.ye("birYemek")` yeteneği ekleyin:
        + .ye() parametre olarak bir string almalıdır, bu parametre yenilebilir bir yiyeceği temsil eder
        + Bir yiyecek yenildiğinde, `mide` dizisine eklenir.
        + Mide dizisinde 10 eleman varsa `ye` metodu hiçbir etki yapmaz.
    - Kisi örneklerine `.bosalt()` yeteneği ekleyin:
        + Eğer bosalt tetiklenirse, 'mide' dizisi boşaltılır.
    - Kisi örneklerine `.toString()` metodu ekleyin:
        + Bu `isim` ve `yas` i içeren bir string döndürmelidir Örnek: "Mary, 50"
*/

function Kisi(isim,yas) {
  this.isim=isim;
  this.yas=yas;
  this.mide=[];
  this.ye=function(yemek){
    if(this.mide.length < 10){
      this.mide.push(yemek);
    }
  };
  this.bosalt=function(){
    this.mide=[];
  };
  this.toString=function(){
    return `${this.isim}, ${this.yas}`;
  };
}
        const fatih = new Kisi("Fatih", 24);
          console.log(fatih.toString());
          fatih.ye("mercimek");
          console.log(fatih.mide);
          fatih.bosalt();
          console.log(fatih.mide)
          //`${this.isim}, ${this.yas}`
/*
  GÖREV 2
    - Bir Araba constructoru yazın, parametre olarak `model` ve `milesPerGallon` alsın.
    - Tüm Araba örnekleri:
        + `tank` ı 0 olarak yüklensin
        + `odometer` ı 0 olarak yüklensin
    - Arabalara `.fill(gallons)` metoduyla depoyu fulleme kabiliyeti ekleyin
      + 'gallons', galon sayısını parametre olarak alacak
      + girilen galonu `tank` a ekleyecek.
    - ESNEK: Arabalara `.drive(distance)` yeteneği ekleyin. Distance ile ilgili:
        + `odometer` ın yükselmesine neden olmalı.
        + `MilesPerGallon` hesaba katılarak `tankın` düşmesine neden olmalıdır.
    - ESNEK: Bir arabanın benzini biterse drive metodu etkisiz şunu döndürmelidir:
        +  "x milde benzinim bitti!" x değişkeni `odometer` daki sayı olmalıdır.
*/

function Araba(model, milesPerGallon) {
  this.tank = 0;
  this.odometer=0;
  this.model=model;
  this.milesPerGallon=milesPerGallon;
  
  
  this.fill=function(gallons){
    this.tank += gallons;
    return this
  };
  // burdan aşağısı esnek kısım
  this.drive=function(distance){
    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
    if (distance/this.milesPerGallon > this.tank){
      return `${this.odometer} mile'de benzinim bitti!`
    }
    };
}

const araba = new Araba("BMW", 20);
console.log(araba.fill(50))
console.log(araba.drive(1000))
console.log(araba.tank);
console.log(araba.odometer);
console.log(araba.milesPerGallon)

/* 
  GÖREV 3
  Kendi cümlelerinizle "this" kelimesinin 4 prensibini açıklayın:
  1. global scopete çalışırken window/console nesnesi olmak
  2. 
  3. 
  4. 
*/


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as(){
  console.log('Kodlar sorunsuz çalışıyor!');
  return 'sa';
}
as();
module.exports = {
  as,
  Kisi, 
  Araba,
  /* Bebek */
}

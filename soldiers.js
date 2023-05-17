const soldier = {
    name: 'Hulk',
    heal: 10,
    gun: {
        nameGun: 'ak-47',
        patrons: 30,
    },
    supplies: 3,
  
    shoot: function () {
      if (this.gun.patrons > 0) {
        this.gun.patrons --;
        console.log('Бах-бах');
      } else {
        console.log('Обойма пуста. Перезаредитесь.');
      }
    },
  
    recharge: function () {
      if (this.supplies > 0) {
        this.gun.patrons = 30;
        this.supplies--;
        console.log('Перезарядка...');
      } else {
        console.log('Не осталось припасов.');
      }
    },
  
    hurt: function () {
      this.heal--;
      if (this.heal === 0) {
        console.log('Ты проиграл.');
      }
    }
  };
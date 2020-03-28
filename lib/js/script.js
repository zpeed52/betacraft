$( window ).ready(function(){
	
	$('.ripple').on('click', function (event) {
		
      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;
      

      
      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");
      
      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        }) 
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });
	
});









/*

BROWSER ALERT

*/
var OneSignal = window.OneSignal || [];
OneSignal.push(["init", {
  appId: "d0e4e62c-0d1f-47c4-9d1e-840778b04a02",
  autoRegister: true, /* Set to true to automatically prompt visitors */
  subdomainName: 'betacraft',
	safari_web_id: 'web.onesignal.auto.445d0d2a-d94a-41a6-9db5-6271b7cfba3f',

  httpPermissionRequest: {
    enable: true
  },
  notifyButton: {
		size: 'large', /* One of 'small', 'medium', or 'large' */
    enable: true, /* Set to false to hide */
		position: 'bottom-left', /* Either 'bottom-left' or 'bottom-right' */
		text: {
			 'tip.state.unsubscribed': 'Haberleri Bildirim Olarak Al!',
			 'tip.state.subscribed': "Bildirim Ayarları",
			 'tip.state.blocked': "Anlık Bildirimler Kapatıldı. Artık bunu görmeyeceksiniz.",
			 'message.prenotify': 'Haberlerimizi Bildirim Olarak Alabilirsiniz.',
			 'message.action.subscribed': 'Aboneliğiniz İçin Teşekkürler. Gelen haberler size bildirim ile gönderilecektir.',
			 'message.action.resubscribed': 'Aboneliğiniz İçin Teşekkürler. Gelen haberler size bildirim ile gönderilmeye devam edecektir...',
			 'message.action.unsubscribed': 'Size artık bildirim gönderilmeyecek. Teşekkür ederiz.',
			 'dialog.main.title': 'Betacraft Bildirimleri',
			 'dialog.main.button.subscribe': 'Abone Ol',
			 'dialog.main.button.unsubscribe': 'Bildirimleri Kapat',
			 'dialog.blocked.title': 'Engellenen Bildirimler',
			 'dialog.blocked.message': 'Tüm Bildirimleri Kapat'
		 }
  },
	welcomeNotification: {
		title: "Aboneliğiniz İçin Teşekkürler",
		message: "Bildirim sistemi sayesinde kampanyalardan ve hediye kredilerden anında haberdar olabileceksiniz!",
		url: "http://betacraft.org/",
	},
  promptOptions: {
    siteName: "Betacraft Bildirim Sistemi",
    actionMessage: "Bildirim sistemi sayesinde kampanyalardan ve hediye kredilerden anında haberdar olabilirsiniz!",
    acceptButtonText : "DEVAM ET",
    cancelButtonText : "İPTAL ET",
    exampleNotificationCaption : "İstediğiniz zaman abonelikten çıkabilirsiniz.",
    exampleNotificationTitleDesktop : "Merhaba XXXXXX",
    exampleNotificationMessageDesktop : "Kupon kampanyası başlamıştır. Hediye kredi kuponları için tıklayın! Detaylar için TIKLAYIN.",
    exampleNotificationTitleMobile : "Merhaba XXXXXX",
    exampleNotificationMessageMobile : "Kupon kampanyası başlamıştır. Hediye kredi kuponları için tıklayın! Detaylar için TIKLAYIN."
  }
}]);

$(document).ready(function() {
	setInterval(function(){
		 console.clear();
		 $('.kickback').html("");
	}, 10000);
});
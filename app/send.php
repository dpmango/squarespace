<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['name']) && !empty($_POST['phone'])){
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "Имя пославшего: ";
  }
}
 
if (isset($_POST['phone'])) {
  if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phoneFieldset = "Телефон: ";
  }
}

if (isset($_POST['email'])) {
  if (!empty($_POST['email'])){
  $email = strip_tags($_POST['email']);
  $emailFieldset = "Имейл: ";
  }
}
if (isset($_POST['frid'])) {
  if (!empty($_POST['frid'])){
  $frid = strip_tags($_POST['frid']);
  $themeFieldset = "Тема: ";
  }
}
$token = "550121390:AAGnNfKfqxySzyyeVBlIJ2OfbKKZ-xmK6-E";
$chat_id = "-319715485";
$arr = array(
  $themeFieldset => $frid,
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $emailFieldset => $email
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
  
  echo '<p class="popup-text">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="popup-text"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
  echo '<p class="popup-text">Ошибка. Вы заполнили не все обязательные поля!</p>';
}
} else {
header ("Location: /");
}
 
?>
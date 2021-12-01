<!DOCTYPE html>
<html  lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="UTF-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="title" content="АИР - Агентство инновационного развития" />
  <meta name="description" content="Социально-ориентированная некоммерческая организация, реализующая научно-исследовательские проекты в сфере IT, мероприятия, направленные на популяризацию научно-технического творчества в сфере цифровых технологий, образовательные проекты." />
  <META NAME="keywords" CONTENT="АИР - Агентство инновационного развития Социально-ориентированная некоммерческая организация, реализующая научно-исследовательские проекты в сфере IT, мероприятия, направленные на популяризацию научно-технического творчества в сфере цифровых технологий, образовательные проекты.">
  <META NAME="AUTHOR" CONTENT="https://vk.com/glrlcocks">
  <meta name="revisit-after" content="5 days">
  <link rel="SHORTCUT ICON" href="/assets/img/air_fav.png" type="image/x-icon">
  <!--соц сети-->
  <meta property="og:title" content="АИР - Агентство инновационного развития">
  <meta property="og:description" content="Социально-ориентированная некоммерческая организация, реализующая научно-исследовательские проекты в сфере IT, мероприятия, направленные на популяризацию научно-технического творчества в сфере цифровых технологий, образовательные проекты.">
  <meta property="og:image" content="/assets/img/airsocial.png">
  <meta itemprop="image" content="/assets/img/airsocial.png" />
  <meta name="twitter:image:src" content="/assets/img/airsocial.png" />
  <meta property="og:url" content="/assets/img/airsocial.png">
  <link rel="stylesheet" href="{{ mix('css/main.css')}}">
  <link rel="stylesheet" href="{{ mix('css/responsive.css')}}">

  <!--Let browser know website is optimized for mobile-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>
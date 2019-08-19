<?php
$app->get('/orders','OrderController:selectOrder');
$app->get('/orderdetail','OrderController:selectOrderdetail');
$app->post('/orders','OrderController:insertOrder');

?>
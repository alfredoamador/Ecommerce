<?php

namespace app\Controllers;

class OrderController extends Controllers{
    public function insertOrder($request,$response){
        $order=$request->getParsedBody();
      //  var_dump($order['cart']['lines'][0]['product']['productCode']);die();
   
   $message=$this->OrderModel->insertOrder($order);
   return json_encode($message);
   
    }
    function selectOrder($request,$response){
        
        $message=$this->OrderModel->selectOrder();
        
        return json_encode($message);
            }
            function selectOrderdetail($request,$response){
        
                $message=$this->OrderModel->selectOrderdetail();
                
                return json_encode($message);
                    }

}

?>
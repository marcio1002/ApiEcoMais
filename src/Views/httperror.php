<?php 
require_once __DIR__ . "/../../vendor/autoload.php";

$this->layout("_theme", ["title" => $errCode]);

$info = ($errCode == "404") ? "Pagina Não encontrada" : "Houve um erro no servidor volte para a página principal ou relate ao suporte sobre o erro";
$background  = ($errCode == "404") ? renderUrl("src/assets/imgs/error404.jpg") : renderUrl("src/assets/imgs/error404.jpg");

$this->start("error");
    echo "
    <div style='background: url($background) no-repeat; background-size: 90%; background-position: 25% 53%; width:100%; height: 100vh;font-size: 2em;'>
    </div>";
 $this->stop()?>


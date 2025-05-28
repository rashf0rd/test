<?php
require_once __DIR__ . '/controllers/HomeController.php';

$controller = new HomeController();

$requestUri = $_SERVER['REQUEST_URI'];

switch ($requestUri) {
    case '/':
        $controller->index();
        break;
    default:
        http_response_code(404);
        echo '404 Not Found';
        break;
}
?>
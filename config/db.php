<?php
return [
    'dsn' => getenv('CRAFT_DB_DRIVER') . ':host=' . getenv('CRAFT_DB_SERVER') . ';dbname=' . getenv('CRAFT_DB_DATABASE'),
    'user' => getenv('CRAFT_DB_USER'),
    'password' => getenv('CRAFT_DB_PASSWORD'),
    'schema' => getenv('CRAFT_DB_SCHEMA'),
    'tablePrefix' => getenv('CRAFT_DB_TABLE_PREFIX'),
];

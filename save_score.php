<?php
header('Content-Type: application/json');

$file = 'data_siswa.json'; // file penyimpanan di server
$data = json_decode(file_get_contents('php://input'), true);

if ($data && isset($data['name']) && isset($data['scores'])) {
    // Ambil data lama
    $existing = [];
    if (file_exists($file)) {
        $existing = json_decode(file_get_contents($file), true) ?? [];
    }

    // Tambah / update data
    $existing[$data['name']] = $data['scores'];

    // Simpan ulang ke file JSON
    file_put_contents($file, json_encode($existing, JSON_PRETTY_PRINT));

    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
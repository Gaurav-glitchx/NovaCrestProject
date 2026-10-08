<?php
/**
 * NovaCrest Technologies — Contact Form API Handler
 * Optimized for Namecheap cPanel PHP 8.x Environment
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method Not Allowed'
    ]);
    exit;
}

// Ingest JSON payload
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    // Fallback to standard POST form data if sent via multipart/x-www-form-urlencoded
    $data = $_POST;
}

$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : 'Not provided';
$company = isset($data['company']) ? trim(strip_tags($data['company'])) : 'Not provided';
$service = isset($data['service']) ? trim(strip_tags($data['service'])) : 'General Inquiry';
$budget = isset($data['budget']) ? trim(strip_tags($data['budget'])) : 'Not specified';
$timeline = isset($data['timeline']) ? trim(strip_tags($data['timeline'])) : 'Not specified';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';
$honeypot = isset($data['honeypot']) ? trim($data['honeypot']) : '';

// 1. Bot Honeypot Check
if (!empty($honeypot)) {
    // Return fake success to confuse spam bot scrapers
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Inquiry received.'
    ]);
    exit;
}

// 2. Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Please provide your name, email, and a brief description of your project.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Please enter a valid email address.'
    ]);
    exit;
}

// 3. Prepare Notification Email
$to = 'hello@novacrest.tech'; // Primary studio inquiry inbox
$subject = "[NovaCrest Inquiry]: {$name} - {$service}";

$emailBody = "========================================================\n";
$emailBody .= "NEW PROJECT INQUIRY — NOVACREST TECHNOLOGIES\n";
$emailBody .= "========================================================\n\n";
$emailBody .= "Client Name:  " . $name . "\n";
$emailBody .= "Email:        " . $email . "\n";
$emailBody .= "Phone:        " . $phone . "\n";
$emailBody .= "Company:      " . $company . "\n";
$emailBody .= "Service:      " . $service . "\n";
$emailBody .= "Budget:       " . $budget . "\n";
$emailBody .= "Timeline:     " . $timeline . "\n";
$emailBody .= "Submitted:    " . date('Y-m-d H:i:s T') . "\n";
$emailBody .= "IP Address:   " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n\n";
$emailBody .= "--------------------------------------------------------\n";
$emailBody .= "Project Description:\n";
$emailBody .= "--------------------------------------------------------\n";
$emailBody .= $message . "\n\n";
$emailBody .= "========================================================\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=utf-8';
$headers[] = 'From: NovaCrest Web Form <no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'novacrest.tech') . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Attempt to send email via cPanel local mail agent
@mail($to, $subject, $emailBody, implode("\r\n", $headers));

// 4. Return Success Response
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Thank you for reaching out. A NovaCrest technical partner will review your requirements and reach out within 24 hours under NDA.'
]);
exit;

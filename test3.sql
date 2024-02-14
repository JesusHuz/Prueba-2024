SELECT u.name AS nombre_usuario,u.birthdate AS fecha_nacimiento,c.name AS nombre_cliente
FROM user AS u
JOIN user_customer AS uc ON u.id = uc.user_id
JOIN customer AS c ON uc.customer_id = c.id
WHERE u.status = 1 AND DATEDIFF(CURRENT_DATE(), u.birthdate) / 365 > 18 AND c.status = 1
ORDER BY c.name;



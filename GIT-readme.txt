1. Apliaksi menggunakan Framework AdonisJS
3. Pastikan Node, NPM Adonis sudah terinstall
2. Aktifkan Anodis menggunakan perintah berikut :
			
	adonis serve --dev		

3. Pastikan module mysql sudah terinstall, berikut printah install mysql module :
			
	npm install mysql --save		

4. Untuk detail penggunaan aplikasi bisa lihat pada file DOKUMENTASI API DAN TATA CARA PENGGUNAAN.docx

5. Untuk route list yang digunakan 
	
	Route List
		
	- GET 127.0.0.1:3333/api/v1/todos/ => return semua record todo list.
		
	- GET /127.0.0.1:3333/api/v1/todos/:username => return todo list berdasakan username yang sudah dikerjakan.
		
	- GET 127.0.0.1:3333/api/v1/todos/:username/:sorting<asc|desc> => return todo list berdasrkan username diurut berdasarkan prioritas.
		
	- POST 127.0.0.1:3333/api/v1/todos/ => simpan ke db.
		
	- PUT 127.0.0.1:3333/api/v1/todos/:id => update todo list berdasarkan id record.
		
	- DELETE 127.0.0.1:3333/api/v1/todos/:id => hapus todo list berdasarkan id record.

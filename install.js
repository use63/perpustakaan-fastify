// app.mjs
import sqlite from "sqlite3";

// Buka atau buat database SQLite
const db = new sqlite.Database("databases/perpustakaan.db");

// Query untuk membuat tabel penulis
const createPenulisTableQuery = `
    CREATE TABLE IF NOT EXISTS penulis (
        id_penulis INTEGER PRIMARY KEY,
        nama_penulis TEXT
    );
`;

// Query untuk membuat tabel buku
const createBukuTableQuery = `
    CREATE TABLE IF NOT EXISTS buku (
        id_buku INTEGER PRIMARY KEY,
        isbn TEXT,
        judul TEXT,
        cover TEXT,
        id_penulis INTEGER,
        thn_rilis DATE,
        FOREIGN KEY (id_penulis) REFERENCES penulis (id_penulis)
    );
`;

// Query untuk membuat tabel anggota
const createAnggotaTableQuery = `
    CREATE TABLE IF NOT EXISTS anggota (
        id_anggota INTEGER PRIMARY KEY,
        nama TEXT,
        alamat TEXT,
        ponsel TEXT,
        email TEXT,
        password TEXT,
        role INTEGER
    );
`;

// Query untuk membuat tabel peminjaman
const createPeminjamanTableQuery = `
    CREATE TABLE IF NOT EXISTS peminjaman (
        id_peminjaman INTEGER PRIMARY KEY,
        id_anggota INTEGER,
        id_buku INTEGER,
        tgl_peminjaman DATE,
        tgl_pengembalian DATE,
        status TEXT,
        FOREIGN KEY (id_anggota) REFERENCES anggota (id_anggota),
        FOREIGN KEY (id_buku) REFERENCES buku (id_buku)
    );
`;

// Menjalankan query pembuatan tabel secara bersamaan
db.serialize(() => {
	db.run(createPenulisTableQuery);
	db.run(createBukuTableQuery);
	db.run(createAnggotaTableQuery);
	db.run(createPeminjamanTableQuery);
});

// Menutup koneksi database setelah selesai
db.close();

-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Feb 2023 pada 18.56
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tvid`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--
-- Pembuatan: 04 Jan 2023 pada 04.08
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `failed_jobs`:
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategoris`
--
-- Pembuatan: 04 Jan 2023 pada 04.08
--

CREATE TABLE `kategoris` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `namaKategori` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `kategoris`:
--

--
-- Dumping data untuk tabel `kategoris`
--

INSERT INTO `kategoris` (`id`, `namaKategori`, `alamat`, `created_at`, `updated_at`) VALUES
(1, 'Audio', 'kategori-audio', '2023-01-03 16:08:53', '2023-01-03 16:08:53'),
(2, 'Visual', 'kategori-visual', '2023-01-03 16:08:53', '2023-01-03 16:08:53'),
(3, 'Produk', 'kategori-produk', '2023-01-03 16:08:53', '2023-01-03 16:08:53'),
(4, 'Hiburan', 'kategori-hiburan', '2023-01-03 16:08:53', '2023-01-03 16:08:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kops`
--
-- Pembuatan: 04 Jan 2023 pada 04.08
--

CREATE TABLE `kops` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `judul` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `perusahaan` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slogan` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `kops`:
--

--
-- Dumping data untuk tabel `kops`
--

INSERT INTO `kops` (`id`, `judul`, `perusahaan`, `slogan`, `logo`, `created_at`, `updated_at`) VALUES
(1, 'Dolorem enim.', 'TVID Production', 'Capacity of Creativity (Stay Creative)', 'TVID-Favicon.png', '2023-01-03 16:08:51', '2023-01-03 16:08:51'),
(2, 'Est.', 'TVID Production', 'Capacity of Creativity (Stay Creative)', 'TVID-Favicon.png', '2023-01-03 16:08:51', '2023-01-03 16:08:51'),
(3, 'Iure.', 'TVID Production', 'Capacity of Creativity (Stay Creative)', 'TVID-Favicon.png', '2023-01-03 16:08:51', '2023-01-03 16:08:51'),
(4, 'Similique.', 'TVID Production', 'Capacity of Creativity (Stay Creative)', 'TVID-Favicon.png', '2023-01-03 16:08:51', '2023-01-03 16:08:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `menus`
--
-- Pembuatan: 04 Jan 2023 pada 04.08
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `menu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tujuan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `menus`:
--

--
-- Dumping data untuk tabel `menus`
--

INSERT INTO `menus` (`id`, `menu`, `tujuan`, `created_at`, `updated_at`) VALUES
(1, 'Beranda', 'http://tvid.test/', '2023-01-03 16:08:52', '2023-01-03 16:08:52'),
(2, 'Discography', 'http://tvid.test/discograph/', '2023-01-03 16:08:52', '2023-01-03 16:08:52'),
(3, 'Videography', 'http://tvid.test/videograph/', '2023-01-03 16:08:53', '2023-01-03 16:08:53'),
(4, 'Toko', 'http://tvid.test/shop/', '2023-01-03 16:08:53', '2023-01-03 16:08:53'),
(5, 'Main', 'http://tvid.test/ground/', '2023-01-03 16:08:53', '2023-01-03 16:08:53'),
(6, 'Hubungi Kami', 'mailto:alamat@email.com', '2023-01-03 16:08:53', '2023-01-03 16:08:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--
-- Pembuatan: 04 Jan 2023 pada 04.08
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `migrations`:
--

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_11_24_025228_create_kops_table', 1),
(6, '2022_11_24_032437_create_postingans_table', 1),
(7, '2022_11_24_042418_create_menus_table', 1),
(8, '2022_11_27_024715_create_kategoris_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--
-- Pembuatan: 04 Jan 2023 pada 04.08
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `password_resets`:
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--
-- Pembuatan: 04 Jan 2023 pada 04.08
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `personal_access_tokens`:
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `postingans`
--
-- Pembuatan: 04 Jan 2023 pada 04.08
--

CREATE TABLE `postingans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kop_id` bigint(20) UNSIGNED NOT NULL,
  `kategori_id` bigint(20) UNSIGNED NOT NULL,
  `judulPosting` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tubruk` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pengirim` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kutipan` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kontenPostingan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `gambar` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publikasi_pada` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `postingans`:
--

--
-- Dumping data untuk tabel `postingans`
--

INSERT INTO `postingans` (`id`, `kop_id`, `kategori_id`, `judulPosting`, `tubruk`, `pengirim`, `kutipan`, `kontenPostingan`, `gambar`, `publikasi_pada`, `created_at`, `updated_at`) VALUES
(1, 3, 1, 'Ut.', '8UorVMtIKSVSjPSRN7zeKqk9NOl3MqQv0SNTYZPIasxPkXeLEjEujWpPHIvVdKj3GJOYZrj6A90ZO8v5BK7ylnCAupfdCrj0Qwkg5TLK9jg6ASYeYTkG7Oj9l0TGD0c4VW12QfSNxZgaQF9LvTF4TQ3njc5ldfxiKgaRf6PHIenPq3oQJ0V9tzj9FJO2ji88nYj4KOCV5Sxh5bD13x0qcAvGuc8xthJWpoVkCdXX630v3NYEDVSJZT7uVWMOM63', 'uN2sf', 'Dolorem et quos et sequi natus delectus.', '<p>Molestias distinctio et ratione ipsam vel. Fuga a consectetur ab ratione dolorem aperiam. Et est dignissimos adipisci voluptas aut et. Beatae id delectus molestias. Alias sequi sed eligendi dolores molestiae necessitatibus in nobis. Aut omnis unde architecto dignissimos voluptatum quo. Iure et unde dolore fuga nisi.</p><p>Natus possimus dolores tempora maiores voluptatum vero laborum. Quam in ab officiis. Maiores voluptatem eveniet libero consequatur qui. Consectetur voluptas tenetur quisquam delectus rerum suscipit. Vero nihil maxime sit sed. Exercitationem doloribus ipsa in officia omnis. Debitis et animi velit qui amet. Vero aut suscipit facilis voluptate tenetur accusantium laboriosam. Id error adipisci voluptas perferendis quia sunt. Quod dignissimos incidunt incidunt voluptas totam neque veritatis. Dolores dolorum quidem minus ea.</p><p>Repellendus nemo cumque consequatur. Et dolores eaque culpa magnam praesentium ut non. Ullam expedita ipsa eum accusantium illum optio praesentium. Placeat architecto doloribus minima qui.</p>', 'TVID-Favicon.png', NULL, '2023-01-03 16:08:51', '2023-01-03 16:08:51'),
(2, 2, 1, 'Dolor dolorem molestiae ut.', 'EMbfKbcUiTYjD4zNHktDqbTCwLbcLvCu27KkNmbUfVQhcvG2arSnDiAlkXmOXxVqho2OAAQPOMr0f4UDHWzX2C8N8C9Gey725iMNeAU9DDESjdg8yLa6R6hR8ezre2V6XkuhvHCceFuxp7jVhujw9baS4HMRhug8QyG9o4bUkJTWm8bMQNjTF6ZUpa9w1D5V2HeeRDhOFMj4ZbFruu8XvNCFg418Iqtzv15gYa0h6WVdzbjewhXDGdr7GpRQWsM', 'OU0gb', 'Esse corporis aut sunt veniam excepturi ut.', '<p>A consequatur qui quaerat. Laboriosam esse similique assumenda maxime itaque. Eius ut eum esse occaecati. Suscipit aut sunt quisquam et aperiam quia ducimus eos. Dolorem voluptas iste deserunt reiciendis ex totam. Expedita dignissimos voluptates exercitationem est est officiis id.</p><p>Dignissimos adipisci sunt sit fugiat. Numquam laborum dolor porro laudantium laudantium amet. Assumenda dolor et reprehenderit voluptate saepe. Consectetur et fugiat saepe hic qui reiciendis numquam. Quia impedit voluptas ipsam tempora est. Et consectetur aliquid explicabo vero corporis labore. Natus sint consectetur illum. Vel quia voluptatem accusamus veniam quisquam aut aut debitis.</p><p>Est facilis voluptatem harum consequatur. Consequatur corrupti dolore consequatur et vel magnam. Sed numquam odio sequi accusamus est. Iste architecto deleniti nostrum non nostrum velit quo. Quia repellat magnam molestiae. Laborum eum qui labore occaecati vitae eius. Sapiente et et non commodi et.</p>', 'TVID-Favicon.png', NULL, '2023-01-03 16:08:51', '2023-01-03 16:08:51'),
(3, 1, 1, 'Quis occaecati.', 'NGfK6pTnTqdHOROMtVyQmd83GEEPhdhL0VlLdjf4v1vqYahaH3anPr5xlXiADqjSSQhsX0CAgxS5pFwPxldtQGSEcwS1TSJaUvlIqR65JCkW2k2PiU8IsnKtZO0UUit8FVWTpDk2YbjDB7tvriflfQc3rHJs33zIPoc2LGiTJczOIHz3qvgCD1e3cJ4KfUdbc90DMuo4qTTAGaHb7QIo9VomFfryK5ZCKci8tRYDyWfOo5mb0Adg8fO5VF0WJdK', 'NoonB', 'Est sint alias assumenda architecto exercitationem molestiae vitae.', '<p>Ratione vel necessitatibus id quidem. Et pariatur architecto et incidunt perspiciatis dolorem voluptatem. Laboriosam saepe eaque voluptate amet rerum sint. Distinctio possimus asperiores ipsam consequuntur sed. Quos vero non exercitationem eaque neque.</p><p>Saepe quaerat beatae sed excepturi nulla. Temporibus eos corrupti aut quia fugiat autem veritatis. Assumenda voluptatem et temporibus rerum aut.</p><p>Laborum dicta voluptates quisquam. Cupiditate ad ut id ut. Dolorum sapiente facere repudiandae est aut omnis.</p>', 'TVID-Favicon.png', NULL, '2023-01-03 16:08:52', '2023-01-03 16:08:52'),
(4, 1, 3, 'Voluptate.', 'QoCXYMVws2p0DC9jyNWPmu0uPVPJErLJLwxhJSnGKoLjaVzUVoNFxbBK3VF32BNGDSWeArb7ENFrooO8zIdjiKAqRXUpHNaXbQESrsgWyBXaFdd55i9alMixt2mhQQCPha4MhLl2e9XAZy69dj0OdAL0q0QcfZHI1Ue6vMzXE8jUi9VdQfmX9rnfaVEGTGtqnX1gY7eMsS3yi1CQsdCo0fkU4ryqLsAAoFNshE4KaXSaDRcMniA54m4YbxfRCOO', 'rfQzX', 'Odit minima architecto facilis facilis est officia velit suscipit tempora numquam atque.', '<p>Dolore nobis dolorum consequatur porro similique. Voluptatibus tenetur omnis et esse excepturi. Unde vel officia voluptatem molestiae. Velit qui non sit. Eum est suscipit sed sunt quam.</p><p>Accusantium dolores est eaque ducimus. Veritatis maxime harum neque dolores nulla velit eveniet saepe. In et omnis sed ut. Ut maiores recusandae et voluptatem. Fugit sit quidem autem voluptate dolorum. Autem est maiores corporis illum non perferendis. Dicta quo provident officiis nam. Qui tenetur repudiandae aperiam blanditiis harum unde nemo consequatur. Et ut et consequatur qui. Quidem vel doloremque eos modi labore expedita voluptate. Accusantium nesciunt nostrum qui molestias illo sed rerum quia.</p><p>Possimus blanditiis maiores veritatis dolor explicabo. Fugit neque sit doloribus quod. Ea delectus ipsam pariatur est sint sit tempore. Adipisci molestiae itaque quos veritatis nesciunt ipsam earum. Illum deserunt voluptas dolor consectetur ut deleniti architecto.</p>', 'TVID-Favicon.png', NULL, '2023-01-03 16:08:52', '2023-01-03 16:08:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--
-- Pembuatan: 04 Jan 2023 pada 04.08
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `users`:
--

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `kategoris`
--
ALTER TABLE `kategoris`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kategoris_namakategori_unique` (`namaKategori`),
  ADD UNIQUE KEY `kategoris_alamat_unique` (`alamat`);

--
-- Indeks untuk tabel `kops`
--
ALTER TABLE `kops`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kops_judul_unique` (`judul`);

--
-- Indeks untuk tabel `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `postingans`
--
ALTER TABLE `postingans`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `postingans_tubruk_unique` (`tubruk`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `kategoris`
--
ALTER TABLE `kategoris`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `kops`
--
ALTER TABLE `kops`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `postingans`
--
ALTER TABLE `postingans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;


--
-- Metadata
--
USE `phpmyadmin`;

--
-- Metadata untuk tabel failed_jobs
--

--
-- Metadata untuk tabel kategoris
--

--
-- Metadata untuk tabel kops
--

--
-- Metadata untuk tabel menus
--

--
-- Metadata untuk tabel migrations
--

--
-- Metadata untuk tabel password_resets
--

--
-- Metadata untuk tabel personal_access_tokens
--

--
-- Metadata untuk tabel postingans
--

--
-- Metadata untuk tabel users
--

--
-- Metadata untuk database tvid
--
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

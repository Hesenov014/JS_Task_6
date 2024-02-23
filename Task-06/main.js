/*Heap
Heap — JVM tərəfindən obyekt yaratmaq, obyektləri tutmaq üçün istifadə olunan yaddaş sahəsidir.
Obyektlər üst - üstə deyil, sanki yanbayan dayanırlar.Əvvəllər buna dinamik yaddaş(dynamic memory area) da deyirdilər.
Heap, adətən, Stack yaddaşından daha böyükdür.Yaddaşdan, yaddaş sızıntısından söhbət getdiyi zaman əsasən, ilk ağla gələn Heap yaddaşıdır.


Stack
Stack — proqramda həmin an işləyən, aktiv olan metodlar üçün ayrılan yaddaş sahələrinin olduğu yerdir. 
Buna gör də bəzən “call stack” də deyilir.


Stack — “last-in, first-out” (LIFO) şəklində işləyir. 
Bu, çox bəsit şəkildə üst-üstə yığılma şəklidir. 
Məsələn, qabları üst-üstə yığırıq, bizə qab lazım olanda ən üstdə olanı götürürük. 
Yəni ilk götürdüyümüz qab — ən son qoyduğumuz, ən üstdəki qab olacaq. Buna görə ona “last-in, first-out” deyilir, yəni son gələn ilk gedir.
function getAvailableSlots(slots, date){



}
getAvailableSlots([
  { id: 1, date: "2026-11-20", time: "14:00", status: "available" },
  { id: 2, date: "2026-11-20", time: "10:00", status: "booked" },
  { id: 3, date: "2026-11-21", time: "09:00", status: "available" },
  { id: 4, date: "2026-11-20", time: "11:20", status: "available" },
]);

// expected output:

// За 2026-11-20 очаквам обектите с id 4, 1, в този ред.
// За 2026-11-22 очаквам празен масив.
// След извикването редът и стойностите в slots трябва да са същите.
export async function fetchDepartmentData(dept, lang = "en") {
  const baseUrl =
    "https://script.google.com/macros/s/AKfycbzcTuB5PJ_dNXExVVK2AMUWPwMDDod3d-apYkH2pShaNY36gSdvrQjK_k9sl50Vy4n_pA/exec";
  const res = await fetch(`${baseUrl}?dept=${dept}`);
  const data = await res.json();

  // Language handling
  return data.staff.map((s) => ({
    name: s.Name,
    role: s.Role,
    photo: s.Photo,
    bio:
      lang === "ms" && s.Bio_MS
        ? s.Bio_MS
        : s.Bio_EN || "No bio available yet.",
  }));
}

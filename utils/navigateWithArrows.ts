import type { Router } from "vue-router";
export function navigateWithArrows(event: KeyboardEvent, router: Router) {
  if (event.key === "ArrowRight") {
    if (router.currentRoute.value.path === "/") {
      router.push("/projects");
    } else if (router.currentRoute.value.path === "/projects") {
      router.push("/contact");
    } else if (router.currentRoute.value.path === "/contact") {
      router.push("/");
    }
  } else if (event.key === "ArrowLeft") {
    if (router.currentRoute.value.path === "/") {
      router.push("/contact");
    } else if (router.currentRoute.value.path === "/projects") {
      router.push("/");
    } else if (router.currentRoute.value.path === "/contact") {
      router.push("/projects");
    }
  }
}


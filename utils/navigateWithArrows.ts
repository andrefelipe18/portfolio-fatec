import type { Router } from "vue-router";

export function navigateWithArrows(event: KeyboardEvent, router: Router) {
  const routes = ["/", "/projects", "/contact", "/resume"];
  const currentIndex = routes.indexOf(router.currentRoute.value.path);

  if (event.key === "ArrowRight") {
    const nextIndex = (currentIndex + 1) % routes.length;
    router.push(routes[nextIndex]);
  } else if (event.key === "ArrowLeft") {
    const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
    router.push(routes[prevIndex]);
  }
}


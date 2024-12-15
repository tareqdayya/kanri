/* SPDX-FileCopyrightText: Copyright (c) 2022-2024 trobonox <hello@trobo.dev>, gitoak

SPDX-License-Identifier: GPL-3.0-or-later

Kanri is an offline Kanban board app made using Tauri and Nuxt.
Copyright (C) 2022-2024 trobonox <hello@trobo.dev>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Index from "@/pages/index.vue";

describe("Index", () => {
  it("should render", async () => {
    const page = await mountSuspended(Index);
    expect(page.html()).toContain("Welcome back to Kanri!");
  });
});

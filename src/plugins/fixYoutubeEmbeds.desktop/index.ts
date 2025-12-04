/*
 * LuoxCord, a fork of Vencord (Discord client mod)
 * Copyright (c) 2023 Vendicated and contributors, forked by luoxthedev
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "FixYoutubeEmbeds",
    description: "Bypasses youtube videos being blocked from display on Discord (for example by UMG)",
    authors: [Devs.coolelectronics]
});

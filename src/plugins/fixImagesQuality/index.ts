/*
 * LuoxCord, a fork of Vencord (Discord client mod)
 * Copyright (c) 2024 Vendicated and contributors, forked by luoxthedev
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "FixImagesQuality",
    description: "Improves quality of images in chat by forcing png format",
    authors: [Devs.Nuckyz],
    patches: [
        {
            find: ".handleImageLoad)",
            replacement: {
                match: /(?<=\i=)"webp"/,
                replace: '"png"'
            }
        }
    ]
});

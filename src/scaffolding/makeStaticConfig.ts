import path from 'path'
import callsite from 'callsite'

/**
 * Presumes that entry point is in `index.tsx`
 * under `src` directory sibling to caller (static.config.js).
 */
export default function makeStaticConfig(opts: any/** static.config.js object */) {
  const callerPath = callsite()[1].getFileName?.();
  if (!callerPath) {
    throw new Error("Unable to determine entry point location (caller path is missing)");
  }
  return {
    plugins: [
      'react-static-plugin-typescript',
      'react-static-plugin-emotion',
      'react-static-plugin-reach-router',
      'react-static-plugin-sitemap',
    ],
    entry: path.join(path.dirname(callerPath), 'src', 'index.tsx'),
  }
}

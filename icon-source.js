import {
  Activity01Icon, Add01Icon, ArrowLeft01Icon, ArrowRight01Icon, ArrowUpRight01Icon,
  CheckmarkCircle01Icon, Clock01Icon, DashboardSquare01Icon, Delete02Icon,
  Download01Icon, Edit02Icon, File01Icon, FilterIcon, GridViewIcon, Home01Icon,
  Layers01Icon, Link01Icon, Menu01Icon, MoreHorizontalIcon,
  Notification03Icon, Package01Icon, Rocket01Icon, Search01Icon, Settings01Icon,
  SidebarLeft01Icon, Upload01Icon, UserCircleIcon, WorkflowSquare01Icon,
} from '@hugeicons/core-free-icons';

const icons = {
  activity: Activity01Icon, add: Add01Icon, back: ArrowLeft01Icon, right: ArrowRight01Icon,
  external: ArrowUpRight01Icon, check: CheckmarkCircle01Icon, clock: Clock01Icon,
  dashboard: DashboardSquare01Icon, delete: Delete02Icon, download: Download01Icon,
  edit: Edit02Icon, file: File01Icon, filter: FilterIcon, grid: GridViewIcon,
  home: Home01Icon, kanban: WorkflowSquare01Icon, layers: Layers01Icon, link: Link01Icon,
  menu: Menu01Icon, more: MoreHorizontalIcon, notification: Notification03Icon,
  package: Package01Icon, release: Rocket01Icon, search: Search01Icon,
  settings: Settings01Icon, sidebar: SidebarLeft01Icon, upload: Upload01Icon,
  user: UserCircleIcon, workflow: WorkflowSquare01Icon,
};
const attrName = key => key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
export function hugeIcon(name, size = 16, stroke = 1.6) {
  const shapes = (icons[name] || icons.file).map(([tag, attrs]) => {
    const props = Object.entries(attrs).filter(([k]) => k !== 'key').map(([k, v]) => `${attrName(k)}="${String(v).replaceAll('&', '&amp;').replaceAll('"', '&quot;')}"`).join(' ');
    return `<${tag} ${props}></${tag}>`;
  }).join('');
  return `<svg class="huge-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" aria-hidden="true" focusable="false">${shapes}</svg>`;
}

import React from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu';

const SidePanel = () => {
    return (
        <>
            <SidebarMenu>
                <SidebarMenu.Header>
                    <SidebarMenu.Brand>
                        HEHE
                    </SidebarMenu.Brand>
                    <SidebarMenu.Toggle />
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Icon>
                                ICON
                            </SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>
                                TITLE
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                    </ SidebarMenu.Nav>
                    <SidebarMenu.Sub>
                        <SidebarMenu.Sub.Toggle>
                            <SidebarMenu.Nav.Icon />
                            <SidebarMenu.Nav.Title>
                                TITLE
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Sub.Toggle>
                        <SidebarMenu.Sub.Collapse>
                            <SidebarMenu.Nav>
                                <SidebarMenu.Nav.Link>
                                    <SidebarMenu.Nav.Icon>
                                        SUBMENU ICON
                                    </SidebarMenu.Nav.Icon>
                                    <SidebarMenu.Nav.Title>
                                       SUBMENU TITLE
                                    </SidebarMenu.Nav.Title>
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>
                        </SidebarMenu.Sub.Collapse>
                    </SidebarMenu.Sub>
                </ SidebarMenu.Body>
            </SidebarMenu>
        </>
    )
}

export default SidePanel